document.getElementById('contact-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message'),
    };

    const statusElement = document.getElementById('form-status');

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer re_KFTn83Py_7zGEYPNiGgLxhFYVNFiSnajU', // Nahraďte svým Resend API klíčem
            },
            body: JSON.stringify({
                from: 'melka.jakub@gmail.com', // Nahraďte vaší ověřenou adresou
                to: 'info@spolecnelevneji.cz', // Kam má e-mail dorazit
                subject: 'Nová zpráva z kontaktního formuláře',
                html: `
                    <h2>Nová zpráva z webu</h2>
                    <p><strong>Jméno:</strong> ${data.name}</p>
                    <p><strong>E-mail:</strong> ${data.email}</p>
                    <p><strong>Zpráva:</strong> ${data.message}</p>
                `,
            }),
        });

        if (response.ok) {
            statusElement.textContent = 'E-mail byl úspěšně odeslán!';
            form.reset();
        } else {
            statusElement.textContent = 'Chyba při odesílání. Zkuste to znovu.';
        }
    } catch (error) {
        statusElement.textContent = 'Chyba: Kontaktujte podporu.';
    }
});
