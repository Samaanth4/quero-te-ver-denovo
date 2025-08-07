document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const wave = document.createElement('div');
        wave.className = 'absolute bottom-0 left-0 w-full overflow-hidden';
        wave.innerHTML = `...`; // SVG aqui
        document.body.appendChild(wave);
    }, 2000); // onda após 2 segundos

    setTimeout(() => {
        const loveMessage = document.createElement('div');
        loveMessage.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';
        loveMessage.innerHTML = `
            <div class="bg-white p-8 rounded-lg text-center max-w-md mx-4">
                <p class="text-3xl font-bold text-rose-600 mb-4">❤️</p>
                <p class="text-lg">Estou contando os minutos para te ver de novo!❤️</p>
                <button class="mt-4 px-6 py-2 bg-rose-600 text-white rounded-full">Fechar</button>
            </div>
        `;
        document.body.appendChild(loveMessage);

        loveMessage.querySelector('button').addEventListener('click', function() {
            loveMessage.remove();
        });
    }, 5000); // mensagem após 5 segundos
});

