 let abaAtiva = 'roupas';
 
        function trocarAba(nome, botaoClicado) {
            abaAtiva = nome;
 
            let paineis = document.querySelectorAll('.painel');
            for (let i = 0; i < paineis.length; i++) {
                paineis[i].classList.remove('ativo');
            }
 
            let abas = document.querySelectorAll('.aba');
            for (let j = 0; j < abas.length; j++) {
                abas[j].classList.remove('ativo');
            }
 
            document.getElementById('painel-' + nome).classList.add('ativo');
            botaoClicado.classList.add('ativo');
        }
 
        function equipar(card) {
            if (card.classList.contains('bloqueado')) {
                return;
            }
 
            let painelAtivo = document.querySelector('.painel.ativo');
            let itens = painelAtivo.querySelectorAll('.item');
 
            for (let i = 0; i < itens.length; i++) {
                itens[i].classList.remove('equipado');
 
                let precoOriginal = itens[i].getAttribute('data-preco');
                if (precoOriginal !== null) {
                    let labels = itens[i].querySelectorAll('.item-label');
                    labels[labels.length - 1].textContent = precoOriginal;
                }
            }
 
            card.classList.add('equipado');
 
            let labelsCard = card.querySelectorAll('.item-label');
            let labelPreco = labelsCard[labelsCard.length - 1];
            if (card.getAttribute('data-preco') === null) {
                card.setAttribute('data-preco', labelPreco.textContent);
            }
 
            labelPreco.textContent = 'Equipado';
 
            if (abaAtiva === 'roupas') {
                let novaImagem = card.getAttribute('data-avatar');
                if (novaImagem !== null) {
                    document.getElementById('img-avatar').src = novaImagem;
                }
            } else if (abaAtiva === 'acessorios') {
                let emoji = card.querySelector('.item-img').textContent;
                document.getElementById('overlay-acessorio').textContent = emoji;
            } else if (abaAtiva === 'fundos') {
                let emoji = card.querySelector('.item-img').textContent;
                document.getElementById('overlay-fundo').textContent = emoji;
            }
        }
 
        let itensEquipados = document.querySelectorAll('.item.equipado');
 
        for (let k = 0; k < itensEquipados.length; k++) {
            let item = itensEquipados[k];
            item.setAttribute('data-preco', 'Equipado');
 
            let painelDoItem = item.closest('.painel');
 
            if (painelDoItem.id === 'painel-roupas') {
                let imgInicial = item.getAttribute('data-avatar');
                if (imgInicial !== null) {
                    document.getElementById('img-avatar').src = imgInicial;
                }
            } else if (painelDoItem.id === 'painel-acessorios') {
                let emoji = item.querySelector('.item-img').textContent;
                document.getElementById('overlay-acessorio').textContent = emoji;
            } else if (painelDoItem.id === 'painel-fundos') {
                let emoji = item.querySelector('.item-img').textContent;
                document.getElementById('overlay-fundo').textContent = emoji;
            }
        }