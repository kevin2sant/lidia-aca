<template>
    <div class='offset-md-3 col-md-6'>
        <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
            <div v-if="!this.send" class="col-md-12">
                <div class="row">
                    <div class="col-md-12">
                        <label for="">Nombre</label>
                        <input type="text" class="form-control" v-model="name" :class="{ 'error': this.name == ''}">
                    </div>

                    <div class="col-md-8">
                        <label for="">Direccion</label>
                        <input type="text" class="form-control" v-model="address" :class="{ 'error': this.address == ''}">
                    </div>

                    <div class="col-md-4">
                        <label for="">Numero</label>
                        <input type="text" class="form-control" v-model="number" :class="{ 'error': this.number == ''}">
                    </div>

                    <div class="col-md-6">
                        <label for="">Region</label>
                        <input type="text" class="form-control" v-model="region" :class="{ 'error': this.region == ''}">
                    </div>

                    <div class="col-md-6">
                        <label for="">Comuna</label>
                        <input type="text" class="form-control" v-model="district" :class="{ 'error': this.district == ''}">
                    </div>

                    <div class="col-md-6"> 
                        <router-link to="./propertys" class="btn btn-block btn-warning button-relative">Volver</router-link>
                    </div> 


                    <div class="col-md-6"> 
                        <button @click="saveProperty" class="btn btn-block btn-success button-relative" id="closeDeliver">Guardar</button>
                    </div> 
                </div>
            </div>
            <div  class="loading" v-else>
                <div>
                    <img src="../../assets/loading.gif" alt="">
                    
                </div>
                <div>Guardando datos</div>
            </div>
        </div>
    </div>
</template>


<script>

export default {
    data () {
        return {
            send : false,
            name : '',
            address : '',
            region : '',
            district : '',
            number : ''
        }
    },
    methods : {
        async saveProperty(){
            if(this.name != '' && this.address != '' && this.region != '' && this.district != '' && this.number != ''){
                this.send = true

                const res = await this.$store.dispatch('createProperty', {
                    "name"      : this.name, 
                    "address"   : this.address, 
                    "region"    : this.region, 
                    "district"  : this.district, 
                    "number"    : this.number
                })
                if (res.status == 'success'){
                    this.send       = false
                    this.name       = ''
                    this.address    = ''
                    this.region     = ''
                    this.district   = ''
                    this.number     = ''
                }
                
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
