// src/components/TodoList.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

describe('TodoList Component', () => {
    // Test for initial render
    test('renders correctly and shows initial todos', () => {
        render(<TodoList />);

        // Verify initial todos are rendered
        expect(screen.getByText('Learn React')).toBeInTheDocument();
        expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
        expect(screen.getByText('Master JavaScript')).toBeInTheDocument();
    });

    // Test for adding a new todo
    test('can add a new todo', () => {
        render(<TodoList />);

        // Simulate typing a new todo in the input field
        const input = screen.getByPlaceholderText('Add a new todo');
        fireEvent.change(input, { target: { value: 'Write more tests' } });

        // Simulate clicking the 'Add Todo' button
        fireEvent.click(screen.getByText('Add Todo'));

        // Check that the new todo has been added
        expect(screen.getByText('Write more tests')).toBeInTheDocument();
    });

    // Test for toggling a todo's completion status
    test('can toggle a todo', () => {
        render(<TodoList />);

        // Get the "Learn React" todo and its toggle button
        const todo = screen.getByText('Learn React');
        const toggleButton = screen.getByText('Complete');

        // Simulate clicking the 'Complete' button to toggle completion
        fireEvent.click(toggleButton);

        // Verify that the todo is now marked as completed (via strikethrough or button label change)
        expect(todo).toHaveStyle('text-decoration: line-through');

        // Simulate toggling it back to incomplete
        fireEvent.click(screen.getByText('Undo'));
        expect(todo).not.toHaveStyle('text-decoration: line-through');
    });

    // Test for deleting a todo
    test('can delete a todo', () => {
        render(<TodoList />);

        // Verify the initial todo is there
        const todo = screen.getByText('Learn React');

        // Simulate clicking the 'Delete' button for the "Learn React" todo
        fireEvent.click(screen.getByText('Delete'));

        // Verify the todo has been removed
        expect(todo).not.toBeInTheDocument();
    });
});
