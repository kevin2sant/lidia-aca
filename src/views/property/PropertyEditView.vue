<template>
    <div class='offset-md-3 col-md-6'>
        <div class='row principal-row' id='contentCreate' style='margin: 0px;'>
            <div v-if="!this.view" class="col-md-12">
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
                        <router-link to="../propertys" class="btn btn-block btn-warning button-relative">Volver</router-link>
                    </div> 


                    <div class="col-md-6"> 
                        <button @click="editProperty" class="btn btn-block btn-success button-relative" id="closeDeliver">Guardar</button>
                    </div> 
                </div>
            </div>
            <div  class="loading" v-else>
                <div>
                    <img src="../../assets/loading.gif" alt="">
                    
                </div>
                <div>{{ this.loadingmsg }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            view : true,
            loadingmsg : 'Buscando informacion',
            name : '',
            address : '',
            region : '',
            district : '',
            number : ''
        }
    },
    mounted() {
        this.refreshData()
        console.log(this.view)
    },
    methods : {
        async refreshData () {
            await this.$store.dispatch('getPropertyId', this.$route.params.id)
            this.view = false
            this.name = this.$store.state.propertys.propertyid.v_name
            this.address = this.$store.state.propertys.propertyid.v_address
            this.region = this.$store.state.propertys.propertyid.v_region
            this.district = this.$store.state.propertys.propertyid.v_district
            this.number = this.$store.state.propertys.propertyid.v_number
        },
        async editProperty(){
            if(this.name != '' && this.address != '' && this.region != '' && this.district != '' && this.number != ''){
                this.view = true
                this.loadingmsg = 'Actualizando datos'
                
                const res = await this.$store.dispatch('editProperty', {
                    "name"      : this.name,
                    "address"   : this.address,
                    "region"    : this.region,
                    "district"  : this.district,
                    "number"    : this.number,
                    "idproperty": this.$route.params.id
                })

                if (res.status == 'success'){
                    this.view = false
                }
            }
        }
    }
}

</script>

<style  scoped lang="scss">
.loading{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        width: 150px;   
    }
}
</style>