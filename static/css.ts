export const CSS = `
.hs-form-private {
  background-color: var(--color-primary-content); /* bg-primary-content */
  display: flex; /* flex */
  justify-content: space-between; /* justify-between */
  padding-top: 0.375rem; /* py-1.5 */
  padding-bottom: 0.375rem; /* py-1.5 */
  padding-right: 0.375rem; /* pr-1.5 */
  font-size: 1rem; /* text-base */
  color: var(--color-primary); /* text-primary */
  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));
  border-radius: 0 0.75rem 0.75rem 0.75rem; /* rounded-xl */
  box-shadow: 0px 5.5px 31.7px 0px rgba(0, 72, 82, 0.09);
}

.hs-input {
  width: 50%;
}

.actions {
  height: 47px;
}

.hs-button {
    --tw-bg-opacity: 1;
    background-color: var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));
    --tw-text-opacity: 1;
    color: var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));
    cursor:pointer;
    transition: transform 0.2s ease-in-out;
    height: 100%;
    padding: 0px 30px 0px 30px;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    border-radius: 8px;
}

.hs-button:hover {
  transform: scale(1.15);
}

.hs-input {
  padding-left: 0.5rem; /* 2 * 0.25rem */
  outline: none;
  font-size: 0.875rem; /* text-sm */
}

.hs-input:focus {
  outline: none;
}

@media (min-width: 768px) {
  .hs-input {
    width: auto;
    flex-grow: 1;
    padding-left: 1.75rem; /* 7 * 0.25rem */
    font-size: 1rem; /* text-base */
  }
}

`;
