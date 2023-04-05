import api from '../api.js'

const propertys = {
  state: {
    property : null,
    propertyid : null
  },
  getters: {
  },
  mutations: {
    SET_PROPERTYS(state, property) {
      state.property = property  
    },
    SET_PROPERTY(state,propertyid){
      state.propertyid = propertyid
    }
  },
  actions: {
    async getPropertys({ commit }) {
      const { data } = await api.get('management/getDataPropertys')
      commit('SET_PROPERTYS', data.data.propertys)
    },

    async createProperty(context ,body) {
      const data = await api.post('management/createProperty', body)
      return data.data
    },

    async getPropertyId({ commit }, id) {
      const { data } = await api.get(`management/getDataPropertyID/${id}`)
      commit('SET_PROPERTY', data.data.property[0])
    },

    async editProperty(context, body){
      const data = await api.post('management/editProperty', body)
      return data.data
    },
    
    
    async sendMail(context, body){
      console.log(body)
      const data = await api.post('management/sendMail', body)
      return data.data
    },
    
    async requestInformation(context, id){
      const res = await api.get(`management/requestInformation/${id}`)
      return res
    },

    async managementValidate(context, data){
      const res = await api.get(`management/validate/${data.idproperty}/${data.type}`)
      return res.data
    },

    async sendRequestTenant(context, body ){
      const res = await api.post(`management/sendFormTenant`, body)
      return res.data
    },

    async sendRequestLessor(context, body ){
      const res = await api.post(`management/sendFormLessor`, body)
      return res.data
    },

    async validateTenant(context, id ){
      const res = await api.get(`management/validateResponse/${id}/1`)
      return res.data
    },
    
    async validateLessor(context, id ){
      const res = await api.get(`management/validateResponse/${id}/2`)
      return res.data
    }

  }
}

export default propertys