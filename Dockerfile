FROM node:14-alpine

# Create app directory
WORKDIR /usr/backend-dongy

# ENV REACT_APP_BACKEND_URL=http://dongyvungtau.site/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .
# COPY --from=build-stage /DongyBE/build /usr/backend-dongy/build

# EXPOSE 8000
CMD [ "node","build/index.js" ]
