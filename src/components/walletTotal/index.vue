<template>
  <div>
    <q-card class="column flex-center" flat="">
    <q-card-section>
         <h3> {{currencyFormat(walletTotal)}} </h3>
    </q-card-section>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      walletTotal: ''
    }
  },

  mounted() {
    this.getWalletTotal();
  },

  methods: {
    async getWalletTotal(){
      try {
        const response = await this.$axios.get(process.env.Api + '/admin/walletTotal' );
        const data = await response.data;

        Array.prototype.sum = function (prop) {
            let total = 0
            for ( let i = 0, _len = this.length; i < _len; i++ ) {
                total += this[i][prop]
            }
            return total
        }

        this.walletTotal = data.data.sum("balance")

      } catch (error) {

      }
    },

    currencyFormat(amount){
      // Create our number formatter.
      const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'NGN',
      });

      return formatter.format(amount); /* $2,500.00 */
    },

  }
}
</script>
