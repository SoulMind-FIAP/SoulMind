 let totalConcluidas = 0;
        let totalMissoes = 4;

        function concluir(botao) {
            let card = botao.parentElement;
            if (card.classList.contains("concluido")) {
                return;
            }
            card.classList.add("concluido");
            botao.textContent = "✓ Concluída!";
            botao.disabled = true;
            totalConcluidas = totalConcluidas + 1;
            let porcentagem = (totalConcluidas / totalMissoes) * 100;
            document.getElementById("barraProg").style.width = porcentagem + "%";
            document.getElementById("texto-progresso").textContent =
                totalConcluidas + " de " + totalMissoes + " concluídas";
        }

        function abrirMenu() {
            let menu = document.getElementById("menuMobile");
            if (menu.classList.contains("aberto")) {
                menu.classList.remove("aberto");
            } else {
                menu.classList.add("aberto");
            }
        }

        function fecharMenu() {
            let menu = document.getElementById("menuMobile");
            menu.classList.remove("aberto");
        }