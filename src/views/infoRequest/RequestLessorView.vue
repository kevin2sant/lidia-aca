<template>
    <div class='offset-md-3 col-md-6'>
        <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
            <div v-if="this.sending == 1" class="row">
                <div class="col-md-12">
                    <label for="">Nombre Completo</label>
                    <input type="text" class="form-control" id="fullname" v-model="fullname">
                </div>
                <div class="col-md-12">
                    <label for="">Nacionalidad</label>
                    <input type="text"  class="form-control" id="nationality" v-model="nationality">
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
                    <label for="">Estado civil</label>
                    <input type="text"  class="form-control" id="civil_status" v-model="civil_status">
                </div>
                <div class="col-md-12">
                    <label for="">Oficio / Profesion</label>
                    <input type="text"  class="form-control" id="profession" v-model="profession">
                </div>
                <div class="col-md-12">
                    <label for="">Direccion</label>
                    <input type="text"  class="form-control" id="address" v-model="address">
                </div>
                <div class="col-md-12">
                    <label for="">Numero</label>
                    <input type="text"  class="form-control" id="number_address" v-model="number_address">
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
                    <label for="">Codigo propiedad</label>
                    <input type="text"  class="form-control" id="property_code" v-model="property_code">
                </div>
                <div class="col-md-12">
                    <label for="">Region propiedad</label>
                    <input type="text"  class="form-control" id="property_region" v-model="property_region">
                </div>
                <div class="col-md-12">
                    <label for="">Comuna propiedad</label>
                    <input type="text"  class="form-control" id="property_district" v-model="property_district">
                </div>
                <div class="col-md-12">
                    <label for="">Bodega propiedad</label>
                    <input type="text"  class="form-control" id="property_ware" v-model="property_ware">
                </div>
                <div class="col-md-12">
                    <label for="">Estacionamiento propiedad</label>
                    <input type="text"  class="form-control" id="property_parking" v-model="property_parking">
                </div>
                <div class="col-md-12">
                    <label for="">Nombre de banco</label>
                    <input type="text"  class="form-control" id="bank_name" v-model="bank_name">
                </div>
                <div class="col-md-12">
                    <label for="">Tipo de cuenta de banco</label>
                    <input type="text"  class="form-control" id="bank_type" v-model="bank_type">
                </div>
                <div class="col-md-12">
                    <label for="">Cuenta de banco</label>
                    <input type="text"  class="form-control" id="bank_number" v-model="bank_number">
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
            sending             : 3,
            fullname            : '',
            nationality         : '',
            type_id             : '',
            number_id           : '',
            civil_status        : '',
            profession          : '',
            address             : '',
            number_address      : '',
            region              : '',
            district            : '',
            mail                : '',
            property_code       : '',
            property_region     : '',
            property_district   : '',
            property_ware       : '',
            property_parking    : '',
            bank_name           : '',
            bank_type           : '',
            bank_number         : '',
            msg                 : 'Validando informacion'
        }
    },
    mounted(){
        this.validated()
    },
    methods : {
        async sendRequest () {
            if (this.fullname != '' && this.nationality != '' && this.type_id != '' && this.number_id != '' && this.civil_status != '' && this.profession != '' 
                               && this.address != '' && this.number_address != '' && this.region != '' && this.district != '' && this.mail != '' && this.property_code != '' 
                               && this.property_region != '' && this.property_district != '' && this.property_ware != '' && this.property_parking != '' 
                               && this.bank_name != '' && this.bank_type != '' && this.bank_number != '')
                {
                this.sending = 3
                this.msg = 'Enviando informacion'
                
                const res = await this.$store.dispatch('sendRequestLessor',{
                    "fullname"            : this.fullname,
                    "nationality"         : this.nationality,
                    "type_id"             : this.type_id,
                    "number_id"           : this.number_id,
                    "civil_status"        : this.civil_status,
                    "profession"          : this.profession,
                    "address"             : this.address,
                    "number_address"      : this.number_address,
                    "region"              : this.region,
                    "district"            : this.district,
                    "mail"                : this.mail,
                    "property_code"       : this.property_code,
                    "property_region"     : this.property_region,
                    "property_district"   : this.property_district,
                    "property_ware"       : this.property_ware,
                    "property_parking"    : this.property_parking,
                    "bank_name"           : this.bank_name,
                    "bank_type"           : this.bank_type,
                    "bank_number"         : this.bank_number,
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
            const validate = await this.$store.dispatch('validateLessor', this.$route.params.id)
            
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