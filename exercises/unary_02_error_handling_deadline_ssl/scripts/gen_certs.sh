
#Inspired from: https://github.com/gbahamondezc/node-grpc-ssl/blob/master/scripts/gen_certs.sh
# Output files
# ca.key: Certificate Authority private key file (this shouldn't be shared in real-life)
# ca.crt: Certificate Authority trust certificate (this should be shared with users in real-life)
# server.key: Server private key, password protected (this shouldn't be shared)
# server.csr: Server certificate signing request (this should be shared with the CA owner)
# server.crt: Server certificate signed by the CA (this would be sent back by the CA owner) - keep on server
# Summary 
# Private files: ca.key, server.key, server.pem (We don't need this, in our case), server.crt
# "Share" files: ca.crt (needed by the client), server.csr (needed by the CA)

echo "Creating certs folder ..."
mkdir certs && cd certs

echo "Generating certificates ..."

openssl genrsa -passout pass:1111 -des3 -out ca.key 4096
openssl req -passin pass:1111 -new -x509 -days 365 -key ca.key -out ca.crt 
# -subj "CN=Bo Slot Petersen\OU=Flexwork Software\emailAddress=someone@somewhere.org"

# ===============================================================

openssl genrsa -passout pass:1111 -des3 -out server.key 4096
openssl req -passin pass:1111 -new -key server.key -out server.csr 
# -subj  "/C=US/ST=WA/L=Seattle/O=Test/OU=Server/CN=localhost:50051"

openssl x509 -req -passin pass:1111 -days 365 -in server.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out server.crt
openssl rsa -passin pass:1111 -in server.key -out server.key

# ===============================================================

openssl genrsa -passout pass:1111 -des3 -out client.key 4096
openssl req -passin pass:1111 -new -key client.key -out client.csr 
# -subj  "/C=US/ST=WA/L=Seattle/O=Test/OU=Client/CN=localhost:50051"

openssl x509 -passin pass:1111 -req -days 365 -in client.csr -CA ca.crt -CAkey ca.key -set_serial 01 -out client.crt
openssl rsa -passin pass:1111 -in client.key -out client.key

# More on certificates
# https://geekflare.com/openssl-commands-certificates/
# https://bbengfort.github.io/2017/03/secure-grpc/




Bruger certs
$ openssl req -passin pass:1111 -new -x509 -days 365 -key ca.key -out ca.crt 
You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.
-----
Country Name (2 letter code) [AU]:DK
State or Province Name (full name) [Some-State]:Sjælland
Locality Name (eg, city) []:København N
Organization Name (eg, company) [Internet Widgits Pty Ltd]:Flexwork Software
Organizational Unit Name (eg, section) []:
Common Name (e.g. server FQDN or YOUR name) []:localhost:50051
Email Address []:bo.s.petersen@gmail.com