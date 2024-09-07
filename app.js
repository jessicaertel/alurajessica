function confirmarAcao() {
    if (confirm("Tem certeza que deseja realizar esta ação?")) {
      // Se o usuário clicar em "OK", execute a ação aqui
      alert("Ação confirmada!");
    } else {
      // Se o usuário clicar em "Cancelar", você pode executar outra ação ou simplesmente cancelar a operação
      alert("Ação cancelada!");
    }
  }