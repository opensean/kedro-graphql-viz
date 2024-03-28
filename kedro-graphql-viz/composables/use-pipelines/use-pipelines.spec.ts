import { render } from "@testing-library/vue";
import { BasicUsePipelines } from "./use-pipelines.composition";

import { afterEach, afterAll, beforeAll, describe, it, expect, vi } from 'vitest';



it("call the composable", () => {
    const { getByText } = render(BasicUsePipelines);
    //console.log(getByText) 
    expect(getByText).toBeTruthy()
  })