function addContact() {
    // Obter os valores do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
  
    // Validar se ambos os campos estão preenchidos
    if (!name || !phone) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
  
    // Criar uma nova linha na tabela
    const table = document.getElementById('contactsTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(table.rows.length);
  
    // Inserir células na nova linha
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
  
    // Adicionar valores às células
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
  
    // Limpar os campos do formulário
    document.getElementById('name').value = '';
    document.getElementById('phone').value = '';
  }
  