<template>
    <div class="row" v-if="this.view == 1 ">
        <div class="col-md-12">
            <h3>Solicitar informacion a 
                <span v-if="type == 1" class="text-info">
                    {{ msg }}
                </span>
                <span v-else class="text-primary">
                    {{ msg }}
                </span> 
                <strong> # {{idproperty}}</strong>
            </h3>
            <hr>
            <label for="">{{ msg }}</label>
            <input class="form-control" type="text" id="tenant" v-model="tenant" :class="{ 'error': this.tenant == ''}">

            <label for="">Correo</label>
            <input class="form-control" type="text" id="mail" v-model="mail" :class="{ 'error': this.mail == ''}">

            <label for="">Telefono</label>
            <input class="form-control" type="text" id="phone" v-model="phone">

        </div>

        <div class="col-md-12"> 
            <button @click="sendMail" class="btn btn-block btn-success button-relative" id="closeDeliver">Enviar</button>
        </div> 
    </div>
    <div v-if="this.view == 0">
        <div  class="loading">
            <div>
                <img src="../../assets/loading.gif" alt="">
                
            </div>
            <div>Enviando solicitud de informacion</div>
        </div>
    </div>
    <div v-if="this.view == 2">
        <div  class="loading">
            <div>Correo Enviado</div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['refreshTable'],
    data(){
        return {
            view : 1,
            tenant : '',
            mail : '',
            phone : ''
        }
    },
    name: 'SendMail',
    props: {
        idproperty  : Number,
        msg         : String,
        type        : Number
    },
    methods : {
        async sendMail(){

            this.view = 0

            if(this.tenant != '' && this.mail != ''){
                const res = await this.$store.dispatch('sendMail', {
                    "v_name"        : this.tenant ,
                    "v_mail"        : this.mail , 
                    "phone"         : this.phone,
                    "i_property"    : this.idproperty,
                    "action"        : this.type
                })

                if (res.status == "success"){
                    this.view = 2
                    console.log('llego')
                    this.$emit('refreshTable')
                }
            }
        }

    }
}
</script>

<style scoped lang="scss">
h3{
    text-align: center;
}

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
</style>``