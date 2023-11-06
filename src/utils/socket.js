import { io } from 'socket.io-client'

const socket = io("https://videcall-server-9tfx.vercel.app/");

export default socket