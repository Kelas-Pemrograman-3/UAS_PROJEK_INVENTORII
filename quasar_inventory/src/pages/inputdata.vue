<template>
    <q-page>
       <div class="row justify-center q-pt-md">
           <div class="col-md-6 col-xs-26">
                <q-card class="my-card">
                <q-card-section>
                    <div class="text-h4 q-pb-md"><center> Input Data Barang </center></div>
                    <q-form
      @submit="onSubmit"
      class="q-gutter-sm"
    >
      <q-input
        filled
        type="text"
        v-model="Nama_Barang"
        label= "Nama Barang"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Harus Diisi']"
      />

      <q-input
        filled
        type="text"
        v-model="Tanggal_Masuk"
        label= "Tanggal Barang Masuk"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Harus Diisi']"
      />

      <q-input
        filled
        type="text"
        v-model="Tanggal_Keluar"
        label= "Tanggal Barang Keluar"
        lazy-rules
      />

      <q-input
        filled
        type="text"
        v-model="Stok"
        label= "Stok Barang"
        lazy-rules
        :rules="[ val => val !== null && val !== '' || 'Harus Diisi']"
      />

      <div>
        <q-btn label="SIMPAN" type="submit" color="primary"/>
      </div>
    </q-form>
                </q-card-section>
                </q-card>
           </div>
       </div>
    </q-page>
</template>

<script>
export default {
  data () {
    return {
      Nama_Barang: '',
      Tanggal_Masuk: '',
      Tanggal_Keluar: '',
      Stok: ''

    }
  },
  methods: {
    onSubmit () {
      this.$axios.post('barang/inputbarang', {
        Nama_Barang: this.Nama_Barang,
        Tanggal_Masuk: this.Tanggal_Masuk,
        Tanggal_Keluar: this.Tanggal_Keluar,
        Stok: this.Stok
      }).then(res => {
        if (res.data.error) {
          this.showNotif(res.data.pesan, 'negative')
        } else {
          this.$router.push('/home')
        }
        this.Nama_Barang = ''
        this.Tanggal_Masuk = ''
        this.Tanggal_Keluar = ''
        this.Stok = ''
      })
    },
    showNotif (msg, color) {
      this.$q.notify({
        message: msg,
        color: 'color'
      })
    }
  }
}
</script>
