export const formatMoney = (amount) => {

    if (amount){
        return amount.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }else {
        return '$0.00';
    }

}