ARG NODE_VERSION=16

FROM node:${NODE_VERSION} as dev

ARG PORT

ARG APP_DIR=/usr/src/app
WORKDIR ${APP_DIR}

CMD npm ci --include-dev && npm run dev












# FROM node:${NODE_VERSION}-alpine as prod
# ARG APP_DIR=/usr/src/app
# WORKDIR ${APP_DIR}
# RUN addgroup -g 1001 -S nodegroup && \
#     adduser -S nodejs -u 1001 -G nodegroup && \
#     chown nodejs:nodegroup $APP_DIR
# USER nodejs
# COPY --chown=nodejs:nodegroup package*.json .
# RUN npm ci --omit-dev
# COPY --chown=nodejs:nodegroup . .
# CMD [ "npm" "start"]

# ARG HOST_UID
# ARG HOST_GID

# RUN groupmod -g $HOST_GID node && \
#     usermod -u $HOST_UID -g $HOST_GID node && \
#     chown node:node $APP_DIR
# USER node
