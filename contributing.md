# Contributing to Maikona

Thank you for your interest in contributing! This is a personal portfolio project, but I welcome bug reports, suggestions, and improvements.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots (if applicable)
- Your browser/environment details

### Suggesting Enhancements

Feature suggestions are welcome! Please open an issue with:
- A clear description of the enhancement
- Why it would be useful
- Any implementation ideas you have

### Code Contributions

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
   - Follow the existing code style
   - Add comments where necessary
   - Test your changes locally
4. **Commit your changes**
   ```bash
   git commit -m "Add: brief description of changes"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
6. **Open a Pull Request**
   - Describe what you changed and why
   - Reference any related issues

## Development Guidelines

### Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Keep components small and focused
- Add TypeScript types for all functions

### Commit Messages

Use clear, descriptive commit messages:
- `Add: new feature or functionality`
- `Fix: bug fix`
- `Update: improvements to existing features`
- `Refactor: code restructuring without feature changes`
- `Docs: documentation updates`

### Testing

Before submitting:
- Run `npm run lint` to check for linting errors
- Run `npx tsc --noEmit` to check for type errors
- Test locally with `npm run dev`
- Ensure `npm run build` succeeds

## Questions?

Feel free to open an issue if you have questions about contributing!