        document.addEventListener('DOMContentLoaded', function() {
            const filtroItems = document.querySelectorAll('.filtro-item');
            const galeriaItems = document.querySelectorAll('.galeria-item');
            
            filtroItems.forEach(item => {
                item.addEventListener('click', function() {
                    // Remove a classe active de todos os itens
                    filtroItems.forEach(i => i.classList.remove('active'));
                    // Adiciona a classe active apenas no item clicado
                    this.classList.add('active');
                    
                    const filterValue = this.getAttribute('data-filter');
                    
                    galeriaItems.forEach(item => {
                        if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
        });