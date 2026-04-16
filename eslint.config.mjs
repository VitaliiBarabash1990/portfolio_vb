// import {getPresets} from 'eslint-config-molindo';

// export default await getPresets('typescript', 'react', 'tailwind', 'jest');

import {getPresets} from 'eslint-config-molindo';

export default (async () => {
  const presets = await getPresets('typescript', 'react', 'tailwind', 'jest');

  return {
    ...presets,
    rules: {
      ...presets.rules, // Сохранение существующих правил
      'object-shorthand': ['error', 'always'] // Добавляем новое правило
    }
  };
})();
