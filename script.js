document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript está rodando');

  const wave = document.createElement('div');
  wave.className = 'absolute bottom-0 left-0 w-full overflow-hidden';
  wave.innerHTML = `
    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="fill-current text-rose-100">
      <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
      <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8c40.92-19,84.73-46,130.83-49.67c36.26-2.85,70.9,9.42,98.6,31.56c31.77,25.39,62.32,62,103.63,73c40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84c30.2,8.66,59,6.17,87.09-7.5c22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
      <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46c59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
    </svg>
  `;
  document.body.appendChild(wave);

  setTimeout(() => {
    const loveMessage = document.createElement('div');
    loveMessage.className = 'fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50';
    loveMessage.innerHTML = `
      <div class="bg-white p-8 rounded-lg text-center max-w-md mx-4">
        <p class="text-3xl font-bold text-rose-600 mb-4">❤️</p>
        <p class="text-lg">Estou contando os minutos para te ver de novo! ❤️</p>
        <button class="mt-4 px-6 py-2 bg-rose-600 text-white rounded-full">Fechar</button>
      </div>
    `;
    document.body.appendChild(loveMessage);

    loveMessage.querySelector('button').addEventListener('click', () => {
      loveMessage.remove();
    });
  }, 3000);
});
