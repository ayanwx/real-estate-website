<template>
    <section
        class="flex sm:pl-12 sm:pr-12 items-center justify-center w-screen p-5 bg-[rgba(0,0,0,0.3)] backdrop-blur-md fixed"
    >
        <div class="flex flex-1 text-3xl font-heading text-orange-400">
            <NuxtLink class="hover:underline transition-all" to="/home">
                {{ info.name }}
            </NuxtLink>
        </div>
        <div class="flex font-text">
            <div class="sm:flex mr-5 items-center hidden">
                <NavLink
                    class="p-2 text-slate-300 hover:text-slate-100 hover:underline transition-all"
                    v-for="link in links"
                    :url="addSlash(link)"
                    :text="link"
                />
            </div>
            <div class="flex">
                <NuxtLink
                    class="p-2 text-slate-100 bg-orange-500 hover:underline"
                    to="/auth"
                >
                    {{ "Sign Up/Login" }}
                </NuxtLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { info } from "~/utils";

const links = ["About", "Properties", "Contact"];
const addSlash = (url: string) => {
    return "/" + url.toLowerCase();
};
</script>
