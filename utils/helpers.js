module.exports = {
    format_date: date => {
        return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(date).getFullYear()}`;
    },
    format_plural: (word, amount) => {
        if (amount !== 1) {
            return `${word}s`;
        }
        return word;
    },
    shorten_post_text: () => {
        if(document.location === 'homepage') {
            /* if you're on the homepage, shorten posts past a certain character length with an ellipsis
            (add text-overflow: ellipsis property )
            */
        } else {
            //text-overflow
        }
    }
}