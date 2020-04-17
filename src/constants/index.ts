export type Constants = {
  readonly PROTOCOL: {
    readonly RSA: {
      readonly KEY_SIZE: number
      readonly EXPONENT: number
      readonly RANDOM_FACTOR_MAX_INPUTS: number
    }
  }
  readonly DATA_STRUCTURE: {
    readonly BLOOM_FILTER: {
      readonly MAX_ELEMENTS: number
      readonly ERROR_RATE: number
    }
  }
}

const constants: Constants = {
  PROTOCOL: {
    RSA: {
      KEY_SIZE: 2048,
      EXPONENT: 0x10001,
      RANDOM_FACTOR_MAX_INPUTS: 1024
    }
  },
  DATA_STRUCTURE: {
    BLOOM_FILTER: {
      MAX_ELEMENTS: 1024,
      ERROR_RATE: 0.001
    }
  }
}

export default constants
