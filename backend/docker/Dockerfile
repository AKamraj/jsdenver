FROM node:16.17
RUN ["mkdir", "/opt/fRPC-Substrate"]
# Better approach would be to git clone this repo, but requires manual step to change config's RPC nodes, so being lazy
COPY [".", "/opt/fRPC-Substrate"]
WORKDIR /opt/fRPC-Substrate/gateway

# Install base packages
RUN ["npm", "i"]

# Additionally install fluence CLI
RUN ["npm", "install", "-g", "@fluencelabs/cli", ]

# Expose the listening port
EXPOSE 3000

# Run the node 
CMD ["npm", "run", "run", "configs/quickstart_config.json"]
