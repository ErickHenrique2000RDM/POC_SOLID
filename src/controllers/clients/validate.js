module.exports = {
    isNumber(id){
        const idNumber = Number(id);
        if(!idNumber){
            throw new Error('Invalid id');
        }
    }
}