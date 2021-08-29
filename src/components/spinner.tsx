import styled from "styled-components";
import { IconLoaderAlt } from "@payright/web-components";

const SCSpinner = styled(IconLoaderAlt)`
  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spin 1s infinite linear;
`;

export default SCSpinner;
