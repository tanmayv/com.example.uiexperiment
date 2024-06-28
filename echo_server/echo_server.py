from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class EchoHandler(BaseHTTPRequestHandler):
    def _send_cors_headers(self):
        # Send CORS headers
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')

    def do_OPTIONS(self):
        self.send_response(200)
        self._send_cors_headers()
        self.end_headers()

    def do_POST(self):
        # Get content length
        content_length = int(self.headers['Content-Length'])
        # Read the body of the POST request
        post_data = self.rfile.read(content_length)
        # Parse the JSON
        try:
            json_data = json.loads(post_data)
        except json.JSONDecodeError:
            self.send_response(400)
            self.send_header('Content-Type', 'application/json')
            self._send_cors_headers()
            self.end_headers()
            self.wfile.write(json.dumps({'error': 'Invalid JSON'}).encode('utf-8'))
            return

        # Send response
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self._send_cors_headers()
        self.end_headers()
        self.wfile.write(json.dumps(json_data).encode('utf-8'))

def run(server_class=HTTPServer, handler_class=EchoHandler, port=5000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f'Starting echo server on port {port}...')
    httpd.serve_forever()

if __name__ == '__main__':
    run()