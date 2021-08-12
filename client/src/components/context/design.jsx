const SpacingDesign = {
  margin: (factor) => ({
    margin: `${8 * factor}px`,
  }),
  marginx: (factor) => ({
    marginLeft: `${8 * factor}px`,
    marginRight: `${8 * factor}px`,
  }),
  marginy: (factor) => ({
    marginTop: `${8 * factor}px`,
    marginBottom: `${8 * factor}px`,
  }),
  marginTop: (factor) => ({
    marginTop: `${8 * factor}px`,
  }),
  marginBottom: (factor) => ({
    marginBottom: `${8 * factor}px`,
  }),
  marginLeft: (factor) => ({
    marginLeft: `${8 * factor}px`,
  }),
  marginRight: (factor) => ({
    marginRight: `${8 * factor}px`,
  }),
  padding: (factor) => ({
    padding: `${8 * factor}px`,
  }),
  paddingx: (factor) => ({
    paddingLeft: `${8 * factor}px`,
    paddingRight: `${8 * factor}px`,
  }),
  paddingy: (factor) => ({
    paddingTop: `${8 * factor}px`,
    paddingBottom: `${8 * factor}px`,
  }),
  paddingLeft: (factor) => ({
    paddingLeft: `${8 * factor}px`,
  }),
  paddingRight: (factor) => ({
    paddingRight: `${8 * factor}px`,
  }),
  paddingTop: (factor) => ({
    paddingTop: `${8 * factor}px`,
  }),
  paddingBottom: (factor) => ({
    paddingBottom: `${8 * factor}px`,
  }),
  square: (factor) => ({
    height: `${8 * factor}px`,
    width: `${8 * factor}px`,
  }),
  height: (factor) => ({
    height: `${8 * factor}px`,
  }),
  width: (factor) => ({
    width: `${8 * factor}px`,
  }),
  fontSize: (factor) => ({
    fontSize: `${8 * factor}px`,
  })
};

export default SpacingDesign;