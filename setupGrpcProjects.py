import subprocess
import os
import pprint
# from os.path import exists

# ------------------------------------------------------------------

# 1) PUT THIS FILE IN AN EMPTY DIRECTORY.
# 2) RUN THE FILE AS A NORMAL PYTHON FILE.
# 3) FOLLOW THE INSTRUCTION IN THE TERMINAL.

# ------------------------------------------------------------------

# Sets path to root folder from where the script is run
dir_path = os.path.dirname(os.path.realpath(__file__))
root_folder = ''
basepath = f'{dir_path}/{root_folder}'

# ------------------------------------------------------------------

# Create directory structure and set root-directory and basepath
print("="*100)
created_dir = input('Root folder: ')
print("="*100)

# Create directories and files
new_path = f'{basepath}/{created_dir}'
scriptA1 = f'mkdir {created_dir}'
scriptA2 = f'mkdir {new_path}/server {new_path}/client {new_path}/protos'
scriptA3 = f'touch {new_path}/server/index.js'
scriptA4 = f'touch {new_path}/client/client.js'
scriptA5 = f'touch {new_path}/protos/default.proto'

# Create package.json and move it into the procjet folder
scriptB1 = f'npm init -y'
scriptB2 = f'mv ./package.json ./{created_dir}'

# Install node packages google-protobuf
scriptB3 = f'npm install --prefix {new_path} @grpc/grpc-js --save'
scriptB4 = f'npm install --prefix {new_path} google-protobuf --save'
scriptB5 = f'npm install --prefix {new_path} nodemon --save-dev'

# Setup list to run in subprocess
run_process = [scriptA1, scriptA2, scriptA3, scriptA4, scriptA5]
run_npm = [scriptB1, scriptB2, scriptB3, scriptB4, scriptB5]

try:
    # Run process to create files and folders
    for process in run_process:
        subprocess.call(process)

    # Run process to setup npm and install modules
    for npm in run_npm:
        subprocess.run(npm, shell=True, check=True)
except:
    print('Something went wrong!')
finally:
    print("Execution finished")

print("="*100)


# https://shuzhanfan.github.io/2017/12/parallel-processing-python-subprocess/
