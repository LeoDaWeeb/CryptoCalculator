let previousSort = {
    'value': 'default',
    'order': 'default'
}

function renderList() {
    let gpulist = document.getElementById('gpulist-js')

    gpulist.innerHTML = ''

    gpus.forEach(gpu => {
        gpulist.innerHTML += `
            <hr class="gpu-hr">
            <div class="row gpu-col">
                <div class="col-4 gpu-name">
                <span><img src="${gpu.image}" width="${gpu.image.endsWith('nvidia.png') ? 30 : 28}px"></span>
                <span ${gpu.image.endsWith('amd.png') ? 'style="padding-left: 3px"' : ''}> ${gpu.name}</span>
                </div>
                <div class="col-2 gpu-power">${gpu.power}W</div>
                <div class="col-2 gpu-hashrate">${gpu.hashrate} MH/s</div>
                <div class="col-4 gpu-hashrate-watt">${gpu.hashratePerWatt.toFixed(3)}</div>
            </div>
        `
    })
}

function sortGpus(sortingBy) {
    if (previousSort.value === sortingBy) {
        if (previousSort.order === 'ascending') {
            previousSort.order = 'descending'
        }
        else {
            previousSort.order = 'ascending'
        }
    }
    else {
        previousSort.value = sortingBy
        previousSort.order = 'ascending'
    }

    gpus.sort((first, second) => {
        if (previousSort.value === sortingBy) {
            if (previousSort.order === 'ascending') {
                return second[sortingBy] - first[sortingBy]
            }
            else {
                return first[sortingBy] - second[sortingBy]
            }
        }
        else {
            return second[sortingBy] - first[sortingBy]
        }
    })

    renderList()
}

renderList()
