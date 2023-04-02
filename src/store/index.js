import { createStore } from 'vuex'

import propertys from './propertys/PropertysStore'
import contracts from './propertys/ContractStore'

const store = createStore({
  modules: {
    propertys,
    contracts
  }
})

export default store