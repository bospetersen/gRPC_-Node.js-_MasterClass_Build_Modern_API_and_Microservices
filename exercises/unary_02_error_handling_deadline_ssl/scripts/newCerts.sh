# Creating certificates for gRPC server AND gRPC client

openssl genrsa -passout pass:1111 -des3 -out ca.key 4096
openssl req -passin pass:1111 -new -x509 -days 365 -key ca.key -out ca.crt 
# -subj "CN=Bo Slot Petersen\OU=Flexwork Software\emailAddress=someone@somewhere.org"


# =======================================================================

# CREATE: private key AND certificate signing request at the same time
openssl req -newkey rsa:2048 -keyout server.key -out server.csr
openssl req -newkey rsa:2048 -keyout client.key -out client.csr

# =======================================================================

# 4. Creating Self-Signed Certificates
openssl x509 -signkey server.key -in server.csr -req -days 365 -out server.crt
openssl x509 -signkey client.key -in client.csr -req -days 365 -out client.crt

# =======================================================================

# NOT IN USE
# 5.1. Create a Self-Signed RootCA 
# openssl req -x509 -sha256 -days 1825 -newkey rsa:2048 -keyout rootCA.key -out rootCA.crt



# https://www.baeldung.com/openssl-self-signed-cert