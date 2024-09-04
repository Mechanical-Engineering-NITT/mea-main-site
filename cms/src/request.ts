import { PayloadRequest } from "payload/types";

export type CustomRequest = PayloadRequest & { webClientUser: object };
