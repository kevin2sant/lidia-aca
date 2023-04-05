<template>
    <div class='offset-md-3 col-md-6'>
        <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
            <div v-if="this.sending == 1" class="row">
                <div class="col-md-12">
                    <label for="">Nombre Completo</label>
                    <input type="text" class="form-control" id="fullname" v-model="fullname">
                </div>
                <div class="col-md-12">
                    <label for="">Tipo de documento</label>
                    <input type="text"  class="form-control" id="type_id" v-model="type_id">
                </div>
                <div class="col-md-12">
                    <label for="">Documento</label>
                    <input type="text"  class="form-control" id="number_id" v-model="number_id">
                </div>
                <div class="col-md-12">
                    <label for="">Direccion</label>
                    <input type="text"  class="form-control" id="address" v-model="address">
                </div>
                <div class="col-md-12">
                    <label for="">Region</label>
                    <input type="text"  class="form-control" id="region" v-model="region">
                </div>
                <div class="col-md-12">
                    <label for="">Comuna</label>
                    <input type="text"  class="form-control" id="district" v-model="district">
                </div>
                <div class="col-md-12">
                    <label for="">Email</label>
                    <input type="text"  class="form-control" id="mail" v-model="mail">
                </div>
                <div class="col-md-12">
                    <label for="">Telefono</label>
                    <input type="text"  class="form-control" id="phone" v-model="phone">
                </div>
                <div class="col-md-12">
                    <label for="">Oficio / Profesion</label>
                    <input type="text"  class="form-control" id="profession" v-model="profession">
                </div>
                <div class="offset-md-3 col-md-6"> 
                    <button class="btn btn-block btn-success button-relative" id="send" @click="sendRequest">Enviar</button>
                </div> 
            </div>
            <div class="loading" v-if="this.sending == 2">
                Ya se ha enviado la informacion solicitada.
            </div>
            <div  class="loading" v-if="this.sending == 3">
                <div>
                    <img src="../../assets/loading.gif" alt="">
                    
                </div>
                <div>{{ this.msg }}</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data(){
        return {
            sending         : 3,
            fullname        : '',
            type_id         : '',
            number_id       : '',
            address         : '',
            region          : '',
            district        : '',
            mail            : '',
            phone           : '',
            profession      : '',
            msg             : 'Validando informacion'
        }
    },
    mounted(){
        this.validated()
    },
    methods : {
        async sendRequest () {
            if (this.fullname != '' && this.type_id != '' && this.number_id != '' && this.address != '' && this.region != '' && this.district != '' && this.mail != '' && this.phone != '' && this.profession != ''){
                this.sending = 3
                this.msg = 'Enviando informacion'
                
                const res = await this.$store.dispatch('sendRequestTenant',{
                    "fullname" : this.fullname,
                    "type_id" : this.type_id,
                    "number_id" : this.number_id,
                    "address" : this.address,
                    "region" : this.region,
                    "district" : this.district,
                    "mail" : this.mail,
                    "phone" : this.phone,
                    "profession" : this.profession,
                    "id"    : this.$route.params.id
                })

                if (res.status == 'success'){
                    this.sending = 2
                }
            }else{
                console.log('error')
            }
        },
        async validated(){
            const validate = await this.$store.dispatch('validateTenant', this.$route.params.id)
            
            if (validate.data.validate[0]['validate'] == 0){
                this.sending = 1
            }else if(validate.data.validate[0]['validate'] > 0){
                this.sending = 2
            }else{
                this.sending = 3
                this.msg = 'Ha ocurrido un error intentelo mas tarde'
            }
        }
    }
}
</script>

<style scoped lang="scss">
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 150px;   
    }
}

.error{
    border: 2px solid #ff9292;
}
</style>