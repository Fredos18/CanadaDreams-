import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FormulaireInscription from './FormulaireInscription';

test('Affiche le formulaire et valide l\'inscription', () => {
  const onSuccess = jest.fn();

  render(<FormulaireInscription onSuccess={onSuccess} />);

  // Remplir le formulaire
  fireEvent.change(screen.getByTestId('nom-input'), { target: { value: 'Jean' } });
  fireEvent.change(screen.getByTestId('email-input'), { target: { value: 'jean@email.com' } });

  // Soumettre le formulaire
  fireEvent.click(screen.getByTestId('submit-btn'));

  // Vérifier le message de succès
  expect(screen.getByTestId('success-message')).toBeInTheDocument();
  expect(onSuccess).toHaveBeenCalledWith({ nom: 'Jean', email: 'jean@email.com' });
});
