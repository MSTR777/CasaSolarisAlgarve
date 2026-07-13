/* @ds-bundle: {"format":3,"namespace":"CasaSolarisDesignSystem_84226e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Divider","sourcePath":"components/core/Divider.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"17d0aa2a1096","components/core/Button.jsx":"6a6ecc2d0cd8","components/core/Card.jsx":"71331a0e7a97","components/core/Divider.jsx":"0bbac64f4682","components/core/Tag.jsx":"782277992aab"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CasaSolarisDesignSystem_84226e = window.CasaSolarisDesignSystem_84226e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Casa Solaris Badge — compact info indicator.
 * Used for property stats (bedrooms, guests, pool), status labels,
 * and amenity highlights. Always uppercase Trebuchet MS.
 */
function Badge({
  label,
  icon,
  variant = 'default'
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: 'var(--text-sm)',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    padding: '6px 12px',
    borderRadius: 'var(--r-xs)',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const variantStyles = {
    default: {
      background: 'var(--cs-parchment)',
      color: 'var(--cs-terracotta)',
      border: '0.5px solid var(--color-border)'
    },
    accent: {
      background: 'var(--cs-terracotta-08)',
      color: 'var(--cs-terracotta)',
      border: '0.5px solid var(--color-border)'
    },
    gold: {
      background: 'var(--cs-amber-08)',
      color: 'var(--cs-umber)',
      border: '0.5px solid rgba(232,163,61,0.25)'
    },
    dark: {
      background: 'rgba(250,246,238,0.10)',
      color: 'var(--cs-parchment)',
      border: '0.5px solid var(--color-border-dark)'
    },
    sand: {
      background: 'var(--cs-sand)',
      color: 'var(--color-text-secondary)',
      border: '0.5px solid var(--color-border-light)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      ...variantStyles[variant]
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      flex: 'none'
    }
  }, icon), label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/**
 * Casa Solaris Button — CTA and navigation actions.
 * All text is automatically set uppercase with generous tracking
 * to match the brand's typographic system.
 */
function Button({
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled,
  href
}) {
  const [hovered, setHovered] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const Tag = href ? 'a' : 'button';
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    textTransform: 'uppercase',
    textDecoration: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'background 220ms var(--ease), box-shadow 220ms var(--ease), transform 140ms var(--ease)',
    transform: pressed ? 'scale(0.98)' : 'scale(1)',
    outline: 'none',
    lineHeight: 1,
    border: 'none',
    position: 'relative',
    overflow: 'hidden'
  };
  const sizeStyles = {
    sm: {
      fontSize: '8px',
      letterSpacing: '0.20em',
      padding: '8px 16px',
      borderRadius: 'var(--r-xs)'
    },
    md: {
      fontSize: '10px',
      letterSpacing: '0.22em',
      padding: '12px 24px',
      borderRadius: 'var(--r-sm)'
    },
    lg: {
      fontSize: '12px',
      letterSpacing: '0.24em',
      padding: '16px 36px',
      borderRadius: 'var(--r-sm)'
    }
  };
  const variantStyles = {
    primary: {
      background: hovered ? '#D85A30' : '#993C1D',
      color: '#FAF6EE',
      boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      border: 'none'
    },
    secondary: {
      background: hovered ? 'var(--cs-stone)' : 'var(--cs-parchment)',
      color: 'var(--cs-terracotta)',
      border: '0.5px solid var(--cs-terracotta)',
      boxShadow: 'none'
    },
    ghost: {
      background: hovered ? 'var(--cs-terracotta-08)' : 'transparent',
      color: 'var(--cs-terracotta)',
      border: 'none',
      boxShadow: 'none'
    },
    outline: {
      background: hovered ? 'rgba(250,246,238,0.08)' : 'transparent',
      color: 'var(--cs-parchment)',
      border: '0.5px solid rgba(250,246,238,0.35)',
      boxShadow: 'none'
    }
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    disabled: disabled,
    onClick: !disabled ? onClick : undefined,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => {
      setHovered(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    style: {
      ...base,
      ...sizeStyles[size],
      ...variantStyles[variant]
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Casa Solaris Card — container for content sections and amenity panels.
 * All cards use warm low-contrast shadows and subtle terracotta borders.
 */
function Card({
  variant = 'default',
  children,
  style,
  noPad = false
}) {
  const [hovered, setHovered] = React.useState(false);
  const base = {
    borderRadius: 'var(--r-sm)',
    overflow: 'hidden',
    transition: 'box-shadow var(--dur) var(--ease)',
    position: 'relative',
    boxSizing: 'border-box'
  };
  const variantStyles = {
    default: {
      background: 'var(--color-surface)',
      border: '0.5px solid var(--color-border)',
      boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      padding: noPad ? 0 : 'var(--s-5)'
    },
    featured: {
      background: 'var(--color-surface)',
      border: '0.5px solid var(--color-border)',
      boxShadow: hovered ? 'var(--shadow-lg)' : 'var(--shadow-md)',
      padding: noPad ? 0 : 'var(--s-5)'
    },
    tinted: {
      background: 'var(--color-surface-tinted)',
      border: '0.5px solid var(--color-border-light)',
      boxShadow: hovered ? 'var(--shadow-md)' : 'var(--shadow-sm)',
      padding: noPad ? 0 : 'var(--s-5)'
    },
    dark: {
      background: 'var(--cs-umber)',
      border: 'none',
      boxShadow: hovered ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
      padding: noPad ? 0 : 'var(--s-5)',
      color: 'var(--color-text-on-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      ...base,
      ...variantStyles[variant],
      ...style
    }
  }, variant === 'featured' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '2px',
      background: 'var(--cs-grad)'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Divider.jsx
try { (() => {
/**
 * Casa Solaris Divider — decorative section separator.
 * Three variants: plain rule, ornamental (compass motif), gradient accent bar.
 */
function Divider({
  variant = 'rule',
  label
}) {
  if (variant === 'gradient') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        height: '2px',
        background: 'var(--cs-grad)',
        margin: '0',
        borderRadius: 0
      }
    });
  }
  const compassMark = /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 66 66",
    style: {
      flex: 'none',
      opacity: 0.5
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(33 33)"
  }, /*#__PURE__*/React.createElement("g", {
    fill: "var(--cs-terracotta)"
  }, /*#__PURE__*/React.createElement("polygon", {
    points: "0,-19 5,-4.5 0,-7 -5,-4.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "0,19 5,4.5 0,7 -5,4.5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "-19,0 -4.5,-5 -7,0 -4.5,5"
  }), /*#__PURE__*/React.createElement("polygon", {
    points: "19,0 4.5,-5 7,0 4.5,5"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "0",
    cy: "0",
    r: "2.6",
    fill: "var(--cs-amber)"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      margin: 'var(--s-5) 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '0.5px',
      background: 'var(--color-border)'
    }
  }), variant === 'ornamental' && compassMark, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 'var(--text-sm)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-text-tertiary)',
      whiteSpace: 'nowrap'
    }
  }, label), variant === 'ornamental' && compassMark, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: '0.5px',
      background: 'var(--color-border)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Divider.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * Casa Solaris Tag — small category or property-feature label.
 * Smaller and less prominent than Badge — used for filtering,
 * taxonomy, and inline content classification.
 */
function Tag({
  label,
  variant = 'default',
  onClick
}) {
  const [hovered, setHovered] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    fontSize: '7px',
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    padding: '4px 10px',
    borderRadius: 'var(--r-xs)',
    whiteSpace: 'nowrap',
    lineHeight: 1,
    cursor: onClick ? 'pointer' : 'default',
    transition: 'background var(--dur-fast) var(--ease)',
    userSelect: 'none'
  };
  const variantStyles = {
    default: {
      background: hovered && onClick ? 'var(--cs-stone)' : 'transparent',
      color: 'var(--color-text-secondary)',
      border: '0.5px solid var(--color-border)'
    },
    accent: {
      background: hovered && onClick ? 'var(--cs-terracotta-14)' : 'transparent',
      color: 'var(--cs-terracotta)',
      border: '0.5px solid var(--cs-terracotta)'
    },
    filled: {
      background: hovered && onClick ? '#D85A30' : 'var(--cs-terracotta)',
      color: 'var(--cs-parchment)',
      border: 'none'
    },
    dark: {
      background: 'transparent',
      color: 'var(--color-text-on-dark-2)',
      border: '0.5px solid var(--color-border-dark)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    style: {
      ...base,
      ...variantStyles[variant]
    }
  }, label);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Tag = __ds_scope.Tag;

})();
