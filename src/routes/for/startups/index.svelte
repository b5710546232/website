<script>
  import Section from "../../../components/section.svelte";
  import Features from "../../../components/features.svelte";
  import Quote from "../../../components/startups/quote.svelte";
  import { features } from "../../../contents/startups";
</script>

<header>
  <h1>Gitpod for Startups</h1>
  <p>
    Spend less time worrying about brittle, local dev environments and more time
    on building great things.
  </p>
  <p
    class="h5 text-gray-900 font-semibold max-w-2xl mx-auto mt-micro mb-x-small"
  >
    Use all our services for free, up to 2 years.
  </p>
  <a href="https://bit.ly/3liFICY" target="_blank" class="btn-conversion"
    >Apply now</a
  >
  <Quote />
</header>

<Section>
  <h2 class="text-center -mb-16">Accelerate your workflow</h2>
  <Features {features} />
</Section>
