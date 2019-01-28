(function() {
  const xpathResults = document.evaluate(
    '//label[text()=\'Non-card Payment\']',
    document
  );
  const nonCardLabel = xpathResults.iterateNext();

  if (nonCardLabel) {
    const nonCardRadio = nonCardLabel.parentElement.firstElementChild;

    nonCardRadio.addEventListener('click', () => {
      const nonCardDetailsTextBox = document.querySelector(
        'div[id=\'non-card-payment\']>input'
      );

      nonCardDetailsTextBox.value = 'Payroll Deduction';
    });
  }
})();
