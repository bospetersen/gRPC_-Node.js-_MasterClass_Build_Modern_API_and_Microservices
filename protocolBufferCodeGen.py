import subprocess
import os
from os.path import exists


print("="*100)
place = input('Place protobuf´s in folder: ')
proto_file = input('What proto-file to compile: ')
print("="*100)
# use  *.proto  to compile all .proto files

# program_folder = 'terminal-data-admin'
dir_path = os.path.dirname(os.path.realpath(__file__))
protoc_path = f'{dir_path}/protoc.exe'

if proto_file == '*':
    proto_file = '*.proto'

proto_file_path = f'./protos/{proto_file}'

if place == '':
    place = 'test_folder'

# plugin = f'--grpc_out=./{place} --plugin=protoc-gen-grpc=C:\\users\\Bruger\\appdata\\roaming\\npm\\node_modules\\grpc-tools\\bin\\grpc_node_plugin.exe'
params = f'--js_out=import_style=commonjs,binary:./{place} {proto_file_path}'
plugin = f'--grpc_out=grpc_js:./{place} --plugin=protoc-gen-grpc=C:\\users\\Bruger\\appdata\\roaming\\npm\\node_modules\\grpc-tools\\bin\\grpc_node_plugin.exe'

run = f'{protoc_path} {params} {plugin}'
# print(run)
# print(run)
# file_exists = exists(path_to_file)
# print(run)

try:
    subprocess.call(run)
    print('Protobuf created')
    print(f'{proto_file} is placed in /{place}')
except:
    print('Something went wrong!')
finally:
    print("Execution finished")

# /c/Users/Bruger/Documents/__PROGRAMMING_PROJECTS/___gRPC_[Node.js]_MasterClass_Build_Modern_API_and_Microservices/grpc/protoc --js_out=import_style=commonjs,binary:./server ./protos/dummy.proto

print("="*100)