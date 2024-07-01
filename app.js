import NodeMediaServer from 'node-media-server';
import { getConfig } from './utils/configLoader.js';

const cfg = getConfig();

const nms = new NodeMediaServer(cfg)
nms.run();