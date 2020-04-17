import rsa, { RsaProtocol } from './rsa'

export type Protocol = {
  readonly rsa: RsaProtocol
}

const protocol = {
  rsa
}

export default protocol
