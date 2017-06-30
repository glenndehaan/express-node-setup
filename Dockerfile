# Use an mongodb/node runtime as a base image
FROM habilelabs/node-mongodb

# Set the working directory to /app
WORKDIR /app

# Make port 3001 available to the world outside this container
EXPOSE 3001
EXPOSE 27017

# Run npm run dev when the container launches
CMD sed -i 's/127.0.0.1/0.0.0.0/g' /etc/mongod.conf; service mongod start; cd ./_scripts; npm install; npm run dev
