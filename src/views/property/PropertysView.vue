<template>
    <div class="row">
        <div class='col-md-8'>
            <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
                <div class="col-md-12">
                    <div class="row">
                        <div class="offset-md-9 col-md-3">
                            <router-link to="./createproperty" class="btn btn-info btn-block" id="createproperty">Crear Propiedad</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <table v-if="this.propertys.length > 0" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <td>#</td>
                                <td>Propiedad</td>
                                <td>Name</td>
                                <td>Estado</td>
                                <td>Acciones</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr  v-for="(property,i) in this.propertys" :key="i">
                                <td><strong>{{ property.i_idproperty }}</strong></td>
                                <td>{{ property.v_address }}</td>
                                <td>{{ property.v_name }}</td>
                                <td style="text-align: center;">
                                    <span v-if="property.b_mail_one == true && property.b_mail_response_one == false" title="Correo de arrendatario enviado"><i class='bx bx-user bx-md text-info'></i></span>
                                    <span v-if="property.b_mail_one == true && property.b_mail_response_one == true" title="Correo de arrendatario respondido"><i class='bx bx-user-check bx-md text-info'></i></span>
                                    <span v-if="property.b_mail_two == true && property.b_mail_response_two == false" title="Correo de arrendador enviado"><i class='bx bxs-user bx-md text-primary'></i></span>
                                    <span v-if="property.b_mail_two == true && property.b_mail_response_two == true" title="Correo de arrendador recibido"><i class='bx bxs-user-check bx-md text-primary'></i></span>
                                </td>
                                <td>
                                    <div class="row">
                                        <div class="col"><router-link class="btn btn-warning btn-block" :to="{name : 'propertyid', params : {id : property.i_idproperty}}">Editar</router-link></div>
                                        <div class="col">
                                            <button class="btn btn-info btn-block" @click="sendMail(property.i_idproperty,1)">Arrendatario</button>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-primary btn-block" @click="sendMail(property.i_idproperty,2)">Arrendador</button>
                                        </div>
                                        <div class="col">
                                            <button class="btn btn-success btn-block" @click="makeContract(property.i_idproperty,2)">Contrato</button>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div  class="loading" v-else>
                        <div>
                            <img src="../../assets/loading.gif" alt="">
                            
                        </div>
                        <div>Obteniendo datos</div>
                    </div>
                </div>
            </div>
        </div>

        <div class='col-md-4'>
            <div class='principal-row' id='contentCreate' style='margin: 0px;padding:20px'>
                <div>
                    <SendMail 
                        @refreshTable="refreshTable"
                        v-if="this.type == 1" 
                        :idproperty="this.idproperty" 
                        msg="Arrendatario" 
                        type="1">
                    </SendMail>

                    <SendMail 
                        @refreshTable="refreshTable"
                        v-if="this.type == 2" 
                        :idproperty="this.idproperty" 
                        msg="Arrendador" 
                        type="2">
                    </SendMail>
                    <div v-if="sent" class="loading">
                        Correo enviado
                    </div>
                </div>
                <div v-if="this.view">
                    <div  class="loading">
                        <div>
                            <img src="../../assets/loading.gif" alt="">
                            
                        </div>
                        <div>Validando propiedad</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import SendMail from './PropertySendMail.vue'

// import axios from 'axios'


export default {
    components : {
        SendMail
    },
    data () {
        return {
            sent : false,
            view : false,
            propertys : [],
            idproperty : '',
            type : 0
        }
    },
    mounted() {
        this.refreshTable()
    },
    methods : {
        async refreshTable () {
            
            await this.$store.dispatch('getPropertys')
            
            this.propertys = this.$store.state.propertys.property

        },

        async sendMail(idproperty,type){
            this.view = true
            this.sent = false
            this.type = 0
            const res = await this.$store.dispatch('managementValidate',{"idproperty" : idproperty, "type" : type})
            if (res.data.validate.length == 0){
                this.idproperty = idproperty
                this.type       = type
            }else{
                this.sent = true
            }

            this.view = false
            
        },

        async makeContract(){
            console.log(1)
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

#createproperty{
    margin-bottom:20px;

    &:hover{
        color:white;
        box-shadow:1px 1px 3px grey;
    }
}
</style>


