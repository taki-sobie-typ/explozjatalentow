function copy() {
    /* Get the text field */
    var copyText = document.getElementById("copy_button");
    var text = "https://explozjatalentow.pl/";

    /*MOBILE*/
    if (navigator.share) {
        navigator.share({
                title: 'Explozja Talentów',
                text: 'Dziękujemy za pomoc!',
                url: window.location.href,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    } else {
        console.log('Share not supported on this browser, do it the old way.');
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(text);

        /* Alert the copied text */
        alert("Skopiowano adres strony");
    }

}