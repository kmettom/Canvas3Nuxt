// Example Component Exports
import MyComponent from './components/MyComponent.vue';

// Example Directive Export
const focusDirective = {
    inserted(el) {
        el.focus();
    },
};

// Plugin Export
export default {
    install(Vue) {
        // Register Components Globally
        Vue.component('MyComponent', MyComponent);

        // Register Directives
        Vue.directive('focus', focusDirective);
    },
};

// Named Exports for Components and Directives (if consumers prefer named imports)
export { MyComponent, focusDirective };
