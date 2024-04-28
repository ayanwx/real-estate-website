<template>
    <section class="flex w-screen p-5 bg-slate-400">
        <div class="text-2xl font-heading">
            {{ info.name }}
        </div>
        <div>
            <NavLink v-for="link in links" :url="addSlash(link)" :text="link" />
        </div>
    </section>
</template>

<script setup lang="ts">
import { info } from "~/utils";

const links = ["Home", "About", "Properties", "Contact"];
const addSlash = (url: string) => {
    return "/" + url.toLowerCase();
};
</script>
