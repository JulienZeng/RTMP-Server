# RTMP Server

A simple RTMP server using node-media-server.

## Usage

```sh
# start rtmp server
pnpm run start

# stop rtmp server
pnpm run stop

# restart rtmp server
pnpm run restart

# logs
pnpm run log

```

Before you running server, you can change config in `config/config`  
Look at [here](https://github.com/illuspas/Node-Media-Server?tab=readme-ov-file#usage) to learn more.

## Accessing the live stream

- RTMP  
   `rtmp://localhost/live/STREAM_NAME`
- http-flv  
   `http://localhost:port/live/STREAM_NAME.flv`
- websocket-flv  
   `ws://localhost:port/live/STREAM_NAME.flv`
- HLS  
   `http://localhost:port/live/STREAM_NAME/index.m3u8`
- DASH  
   `http://localhost:port/live/STREAM_NAME/index.mpd`
